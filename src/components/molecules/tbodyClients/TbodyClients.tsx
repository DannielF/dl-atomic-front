import { useState } from 'react';
import { Client } from '../../../domain/entities/Client';
import { FormTransfer } from '../formTransfer/FormTransfer';

export const TbodyClients = ({
  props
}: {
  props: { clients: Client[]; wallet: Client };
}) => {
  const [selectedClient, setSelectedClient] = useState<Client>();
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleSelectClient = (client: Client) => {
    setSelectedClient(client);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <tbody className="table-group-divider">
      {!showForm && props.clients.length > 0 ? (
        props.clients.map((client: Client) => (
          <tr key={client.clientId}>
            <td>{client.email}</td>
            <td>{client.balance}</td>
            <td>
              <button onClick={() => handleSelectClient(client)}>
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
