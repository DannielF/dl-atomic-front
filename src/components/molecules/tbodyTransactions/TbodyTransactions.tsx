import { Transaction } from '../../../domain/entities/Transaction';

/**
 * @description Tbody transactions component
 * @param {object} props - React props
 * @returns {ReactElement} React Element
 */
export const TbodyTransactions = ({ props }: { props: Transaction[] }) => {
  return (
    <tbody className="table-group-divider" role="tbody">
      {props.length > 0 ? (
        props.map((transaction: Transaction) => (
          <tr key={transaction.transactionId} role="row">
            <td>{transaction.type}</td>
            <td>{transaction.to}</td>
            <td>{transaction.quantity}</td>
            <td>{transaction.date?.slice(0, 10)}</td>
          </tr>
        ))
      ) : (
        <tr>
          <></>
        </tr>
      )}
    </tbody>
  );
};
