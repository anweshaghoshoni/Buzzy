import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name='description' content={description} />
         <meta name='keyword' content={keywords} />
      </Helmet>
   );
};

Meta.defaultProps = {
   title: 'BuzzBuy',
   description: 'Discover high-quality products at budget-friendly prices',
   keywords: 'electronics, buy electronics, affordable electroincs',
};

export default Meta;