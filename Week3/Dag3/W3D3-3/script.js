const doWork = async function() {
  const data = await getData();
  console.log('here is your data to do something:', data);
};

doWork();
