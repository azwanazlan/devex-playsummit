import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FormsProps = ComponentProps & {
  fields: {
    exampleToRemove: Field<string>;
  };
};

const Forms = (props: FormsProps): JSX.Element => (
  <div>
    <p>{props.params.name} Component</p>
  </div>
);

export default withDatasourceCheck()<FormsProps>(Forms);
