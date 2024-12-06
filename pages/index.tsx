export const getStaticProps = () => {
  return {
    redirect: {
      destination: '/home',
      permanent: true,
    },
  };
};

const Index = () => {
  return null;
};

export default Index;
