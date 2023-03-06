import PropTypes from 'prop-types';
import { Transaction } from '../Transaction/Transaction';
import { Body, Container, Head } from './TransactionsHistory.styled';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <Container>
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

TransactionsHistory.propTypes = {
  transactions: PropTypes.array,
};
