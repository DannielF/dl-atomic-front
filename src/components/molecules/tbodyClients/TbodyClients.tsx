import { Client } from '../../../domain/entities/Client';
import { useAppSelector } from '../../../shared/store/hooks';

export const TbodyClients = ({ props }: { props: Client[] }) => {
  const clientWallet = useAppSelector((state) => state.wallet.client);
  const handleTransfer = (client: Client) => {
    console.log('transfer');
    console.log(client);
    console.log(clientWallet);
  };

  return (
    <>
      {props.map((client: Client) => (
        <tr key={client.clientId}>
          <td>{client.email}</td>
          <td>{client.balance}</td>
          <td>
            <button onClick={() => handleTransfer(client)}>Transfer</button>
          </td>
        </tr>
      ))}
    </>
  );
};
