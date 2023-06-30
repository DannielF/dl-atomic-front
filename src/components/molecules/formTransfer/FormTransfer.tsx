import { useAuth0 } from '@auth0/auth0-react';
import { Signal } from '@preact/signals-react';
import { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getAuthParams } from '../../../config/security/GetAuthParams';
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
    client: Client;
    setShowForm: Signal<boolean>;
  };
}): ReactElement => {
  const dispatch = useAppDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const handleTransfer: SubmitHandler<Inputs> = async (data): Promise<void> => {
    try {
      const params = getAuthParams();
      const token = await getAccessTokenSilently(params);
      const transaction: CreateTransaction = {
        from: props.userWallet.email,
        to: props.client.email,
        quantity: data.quantity,
        type: TransactionType.TRANSFER,
        clientId: props.userWallet.clientId ?? ''
      };
      dispatch(makeTransferWallet({ transaction, token: token ?? '' }));
      props.setShowForm.value = false;
      navigate('/dashboard/transactions');
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
