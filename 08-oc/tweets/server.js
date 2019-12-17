export const data = (context, callback) => {
  const { user } = context.params;
  callback(null, {
    user,
  });
};
