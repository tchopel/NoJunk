using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace noJunkAgain.Controllers
{
    public class youtubeController : Controller
    {
        //
        // GET: /youtube/

        public string Index()
        {
            return "hello";
        }

        //
        // GET: /youtube/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /youtube/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /youtube/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /youtube/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /youtube/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /youtube/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /youtube/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
