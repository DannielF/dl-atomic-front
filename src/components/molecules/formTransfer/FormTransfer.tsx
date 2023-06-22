import { useAuth0 } from '@auth0/auth0-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Client } from '../../../domain/entities/Client';
import {
  Transaction,
  TransactionType
} from '../../../domain/entities/Transaction';
import { getAuthParams } from '../../../services/GetAuthParams';
import { makeTransferWallet } from '../../../shared/asyncThunks/AsyncThunks';
import { useAppDispatch } from '../../../shared/store/hooks';

type Inputs = {
  quantity: number;
};

export const FormTransfer = ({
  props
}: {
  props: {
    userWallet: Client;
    client: Client | undefined;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) => {
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const handleTransfer: SubmitHandler<Inputs> = async (data) => {
    try {
      const params = getAuthParams();
      const token = await getAccessTokenSilently(params);
      const transaction: Transaction = {
        from: props.userWallet.clientId ?? '',
        to: props.client?.clientId ?? '',
        quantity: data.quantity,
        type: TransactionType.TRANSFER
      };
      dispatch(makeTransferWallet({ transaction, token: token ?? '' }));
      props.setState(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleTransfer)}>
      <div className="mb-3">
        <label htmlFor="basic-url" className="form-label">
          How much do you want to transfer?
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            Quantity
          </span>
          <input
            type="number"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
            {...register('quantity', { required: true })}
          />
          {errors.quantity && <p>Quantity is required</p>}
        </div>
        <div className="form-text" id="basic-addon4">
          Example value: $100
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
