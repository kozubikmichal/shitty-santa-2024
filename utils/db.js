export const getUserName = async (dbClient, id) => {
  const { data } = await dbClient
    .from("participants")
    .select()
    .eq("uuid", id)
    .maybeSingle();

  return data?.name;
};

export const getRecipientId = async (dbClient, from) => {
  const { data } = await dbClient
    .from("pairs")
    .select()
    .eq("from", from)
    .maybeSingle();

  return data?.to;
};

export const getRecipientName = async (dbClient, from) => {
  const toId = await getRecipientId(dbClient, from);
  return getUserName(dbClient, toId);
};
