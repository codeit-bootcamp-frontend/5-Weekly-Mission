import { useEffect, useState } from 'react';
import { getUser } from '../api/api';

export interface User {
  id: string;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

function useGetUser(accessToken: string) {
  const [user, setUser] = useState();

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUser(accessToken);
      setUser(response[0]);
    };

    loadUser();
  }, [accessToken]);

  return { user };
}

export default useGetUser;
