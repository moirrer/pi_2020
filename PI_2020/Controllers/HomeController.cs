using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Regras;

namespace PI_2020.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {

            ViewBag.msg = "Como vai voce?";
            ViewBag.usuario = new Usuario().Lista();

            return View();
        }
    }
}