using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace noJunkAgain.Controllers
{
    public class HomeController : Controller
    {
       
        public ActionResult Index() //home page and portfolio by default
        {
            return View();
        }

        public ActionResult Resume()
        {
            return View();
        }

    }
}
