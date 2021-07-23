import {useContext, useEffect, useState} from 'react';
import {sleep} from '../helpers';
import {Context as AuthContext} from '../context/AuthContext';

const useLocalSignin = () => {
  const [tryingLocalSignin, setTryingLocalSign] = useState(true);
  const {actionFunctions} = useContext(AuthContext);

  useEffect(() => {
    async function signin() {
      try {
        await sleep(1000);
        await actionFunctions.tryLocalSignin();
      } catch (e) {
        console.log(e);
      } finally {
        setTryingLocalSign(false);
      }
    }
    signin();
  }, []);

  return {tryingLocalSignin};
};

export {useLocalSignin};
