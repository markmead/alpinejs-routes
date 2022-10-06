export default function (Alpine) {
  Alpine.magic('route', () => (routeName, routeSlugs) => {
    let foundRoute = window.alpineRoutes[routeName]

    const routeSlugParams = Object.keys(routeSlugs)

    routeSlugParams.forEach(function (routeSlugParam) {
      foundRoute = foundRoute.replace(
        `:${routeSlugParam}`,
        routeSlugs[routeSlugParam]
      )
    })

    return foundRoute
  })
}
