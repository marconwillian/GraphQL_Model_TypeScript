interface PageInfo{
    endCursor: String
    hasNextPage: Boolean
}

const pageInfo: PageInfo = {
  endCursor: "CURSOR NÃO ARRUMADO",
  hasNextPage: true
}


const testes = async () => {
  try {
    const current = "CURSOR NÃO ARRUMADO";

    return {
      pageInfo,
      edges: [{
        node: {
            name: "Marcon",
            id: 2
        }, 
        cursor: current
        
      }],
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const teste = async () => {
  try {
    return {
        name: "Marcon",
        id: 2
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  testes,
  teste
};