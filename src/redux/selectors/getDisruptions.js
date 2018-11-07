const getDisruptions = (data, lineName) => {
  const disruptions = data.find(line => line.name === lineName)
  return disruptions ? disruptions.lineStatuses.filter(status => status.statusSeverity < 10) : []
}

export default getDisruptions