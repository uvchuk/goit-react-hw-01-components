import { Transaction } from '../Transaction/Transaction';
import { Body, Container, Head } from './TransactionsHistory.styled';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <Container className="transaction-history">
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>
      <Body>
        <Transaction items={transactions} />
      </Body>
    </Container>
  );
};
