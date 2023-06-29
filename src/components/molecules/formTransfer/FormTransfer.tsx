import useToken from '../../../config/security/hook/TokenAuth';
import { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Client } from '../../../domain/entities/Client';
import { CreateTransaction } from '../../../domain/entities/CreateTransaction';
import { TransactionType } from '../../../domain/entities/Transaction';
import { makeTransferWallet } from '../../../shared/asyncThunks/AsyncThunks';
import { useAppDispatch } from '../../../shared/store/hooks';

type Inputs = {
  quantity: number;
};

/**
 * @description Form to made a transfer
 * @param {object} props - React props
 * @returns {ReactElement} React Element
 */
export const FormTransfer = ({
  props
}: {
  props: {
    userWallet: Client;
    client: Client | undefined;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  };
}): ReactElement => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const handleTransfer: SubmitHandler<Inputs> = (data): void => {
    const DispatchTransaction = () => {
      const token = useToken();
      const transaction: CreateTransaction = {
        from: props.userWallet.email,
        to: props.client?.email ?? '',
        quantity: data.quantity,
        type: TransactionType.TRANSFER,
        clientId: props.userWallet.clientId ?? ''
      };
      dispatch(makeTransferWallet({ transaction, token: token ?? '' }));
    };
    DispatchTransaction();
    props.setState(false);
  };

  return (
    <form onSubmit={handleSubmit(handleTransfer)}>
      <div className="mb-3">
        <label htmlFor="basic-url" className="form-label">
          How much do you want to transfer?
        </label>
        {errors.quantity && (
          <div className="mt-2 mb-2 link-danger link-underline-opacity-25">
            Quantity is required
          </div>
        )}
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
