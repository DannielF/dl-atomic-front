import { ReactElement, useState } from 'react';
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
  const [selectedClient, setSelectedClient] = useState<Client>();
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleSelectClient = (client: Client): void => {
    setSelectedClient(client);
    setShowForm(true);
  };

  const handleCancel = (): void => {
    setShowForm(false);
  };

  return (
    <tbody className="table-group-divider" role="tbody">
      {!showForm && props.clients.length > 0 ? (
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
                client: selectedClient,
                setState: setShowForm
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
