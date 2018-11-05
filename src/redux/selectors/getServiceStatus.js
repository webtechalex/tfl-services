const getServiceStatus = (services) => Array.isArray(services)
  ? services.map(service => ({
    modeName: service.modeName,
    name: service.name,
    isNight: service.serviceTypes.find(serviceType => serviceType.name === 'Night'),
    hasDisruptions: service.lineStatuses.find(status => status.statusSeverity < 10)
  }))
  : null

export default getServiceStatus