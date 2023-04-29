import React, { useState, useEffect } from 'react';

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import { Helmet } from 'react-helmet';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <Helmet>
        <title>My Campaigns</title>
      </Helmet>
      <DisplayCampaigns
        title='My Campaigns'
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  );
};

export default Profile;
