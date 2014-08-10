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

        public ActionResult Resume2()
        {
            return View(); 
        }


        public ActionResult Contact()
        {
            return View();
        }

        public ActionResult Portfolio()
        {
            return View();
        }

        public ActionResult projectBell()
        {
            return View();
        }

        public ActionResult projectChat()
        {
            return View();
        }

        public ActionResult projectRobotic()
        {
            return View();
        }

        public ActionResult projectPersonalSite()
        {
            return View();
        }
    }
}
