using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using noJunkAgain.Models;

namespace noJunkAgain.Controllers
{
    public class HomeController : Controller
    {
       
        public ActionResult Index() //home page and portfolio by default
        {
            return View();
        }


        public string contactPost(string message, string name, string email)
        {
            messageContext userMessage = new messageContext();
            if (!(message == null || name == null || email == null))
            {
                message singularMessage = new message();
                singularMessage.email = email;
                singularMessage.msg = message;
                singularMessage.name = name;
                userMessage.messages.Add(singularMessage);
                userMessage.SaveChanges();
            }

            return "success";
        }

    }
}
