using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace FileManagementWeb2
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{username}/{password}",
                defaults: new { username = RouteParameter.Optional, password = RouteParameter.Optional }
            );
        }
    }
}
