import { useSignal } from '@preact/signals-react';
import { ReactElement } from 'react';
import { Client } from '../../../domain/entities/Client';
import { FormTransfer } from '../formTransfer/FormTransfer';

/**
 * @description Tbody clients component
 * @param {object} props - React props
 * @returns {ReactElement} React Element
 */
export const TbodyClients = ({
  props
}: {
  props: { clients: Client[]; wallet: Client };
}): ReactElement => {
  const showFormTransfer = useSignal<boolean>(false);
  const setTransferClient = useSignal<Client>({
    clientId: '',
    email: '',
    balance: 0
  });

  const handleSelectClient = (client: Client): void => {
    setTransferClient.value = client;
    showFormTransfer.value = true;
  };

  const handleCancel = (): void => {
    showFormTransfer.value = false;
  };

  return (
    <tbody className="table-group-divider" role="tbody">
      {!showFormTransfer.value && props.clients.length > 0 ? (
        props.clients.map((client: Client) => (
          <tr key={client.clientId} role="row">
            <td>{client.email}</td>
            <td>{client.balance}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => handleSelectClient(client)}
              >
                Transfer
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>
            <FormTransfer
              props={{
                userWallet: props.wallet,
                client: setTransferClient.value,
                setShowForm: showFormTransfer
              }}
            />
          </td>
          <td>
            <button className="btn btn-danger" onClick={handleCancel}>
              X
            </button>
          </td>
        </tr>
      )}
    </tbody>
  );
};
