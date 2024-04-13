using Simplydatatech.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Simplydatatech.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult DataScience()
        {
            return View();
        }
        public ActionResult DataAnalyst()
        {
            return View();
        }
        public ActionResult InvestmentBanking()
        {
            return View();
        }
        public ActionResult DigitalMarketing()
        {
            return View();
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Becomeourtrainer()
        {
            return View();
        }
        public ActionResult HireFromUs()
        {
            return View();
        }
        public ActionResult ForBusiness()
        {
            return View();
        }
        public ActionResult Resources()
        {
            return View();
        }
        public ActionResult PrivacyPolicy()
        {
            return View();
        }
        public ActionResult Terms()
        {
            return View();
        }
        public ActionResult Refund()
        {
            return View();
        }
        public ActionResult Shipping()
        {
            return View();
        }
        public ActionResult Search(string terms = "")
        {
            ViewBag.terms = terms;
            ViewBag.Course1 = "none";
            ViewBag.Course2 = "none";
            ViewBag.Course3 = "none";
            ViewBag.Course4 = "none";
            ViewBag.None = "none";

            List<Course> course = new List<Course>() {
                new Course{Id=1,Name= "Executive Certificate Program in Data Science"},
                new Course{Id=2,Name= "Professional Certificate Course in Data analyst"},
                new Course{Id=3,Name="Post Graduate Program in Digital marketing"},
                new Course { Id=4, Name= "Caltech Post Graduate Program in Investment Banking" }
                };
            var result = course.Where(x => x.Name.ToLower().Contains(terms.ToLower())).ToList();
            if (result.Count > 0)
            {
                foreach (var item in result)
                {
                    if (item.Id == 1)
                    {
                        ViewBag.Course1 = "block";
                    }
                    else if (item.Id == 2)
                    {
                        ViewBag.Course2 = "block";
                    }
                    else if (item.Id == 3)
                    {
                        ViewBag.Course3 = "block";
                    }
                    else if (item.Id == 4)
                    {
                        ViewBag.Course4 = "block";
                    }
                }

            }
            else
            {
                ViewBag.None = "block";
            }
            return View();
        }

        [HttpPost]
        public ActionResult Callbackrequest(string name, string email,string mobile, string course, string linkedinurl="")
        {
            var sendstatus = 0;
            var MailBody = "";
            MailConfig mail = new MailConfig();
            if (string.IsNullOrEmpty(linkedinurl))
            {
                 MailBody = $@"<table width='100%' border='0' cellspacing='0' cellpadding='0'>
      <tr>
          <!--header start-->
          <td width='100%' align='left' valign='top' style=' height: 61px; text-align: center;'>
              <a href='https://goliveindia.in/'><img src='http://www.simplydatatech.com/assets/image/new/Logo.png' alt='' width='240' /></a>
          </td>
          <!--header end-->
      </tr>


      <tr>
          <!--content start-->
          <td width='100%' align='center' valign='top' style='padding:20px 0;'>
              <table width='98%' border='0' cellspacing='0' cellpadding='0'>
                  <tr>
                      <td width='98%' align='left' valign='top'>
                          <h3 style='padding:0 0 10px 0; margin:0; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif; color:#000; font-size:17px; font-weight:normal;'>Hi {name},</h3>
                          <p style='padding:0 0 20px 0; margin:0; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif; color:#555; font-size:16px; font-weight:normal;'>Thank you for reaching to us. Our concern team will look in to it and will get back to you soon!</p>
                        
                      </td>
                  </tr>
                  <tr>
                      <td width='98%' align='left' valign='top' style='padding:20px 0 0 0;'>
                          <h3 style='padding:0 0 0 10px; margin:0; background:orange; font-family:Trebuchet MS, Arial, Helvetica, sans-serif; color:#fff; font-size:20px; font-weight:normal; height:41px; line-height:41px;'>Submitted Details</h3>
                          <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                              <tr>
                                  <td width='100%' align='left' valign='top' style='padding:10px; border:1px solid #ccc; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif; color:#555; font-size:16px; font-weight:normal;'>
                                      <p style='padding:0 0 10px 0; margin:0;'><strong style='font-size:17px; color:#000;'>Name :</strong> {name}</p>
                                      <p style='padding:0 0 10px 0; margin:0;'><strong style='font-size:17px; color:#000;'>Email :</strong> {email}</p>
                                      <p style='padding:0 0 10px 0; margin:0;'><strong style='font-size:17px; color:#000;'>Mobile :</strong> {mobile}</p>
                                      <p style='padding:0 0 10px 0; margin:0;'><strong style='font-size:17px; color:#000;'>Course :</strong> {course}</p>
                                      
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td width='98%' align='left' valign='top' style='padding:20px 0 0 0;'>
                          <p style='padding:0 0 5px 0; margin:0; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif; color:#000; font-size:17px; font-weight:normal;'>Thanking You!</p>
                          <p style='padding:0; margin:0; font-family:Trebuchet MS, Arial, Helvetica, sans-serif; color:#000; font-size:17px; font-weight:normal;'><span style='color:orange;'>Simplydatatech</span> Team</p>
                      </td>
                  </tr>
              </table>
          </td>
          <!--content end-->
      </tr>

      <tr><td height='20' style='padding:0px'></td> </tr>
     
      
  </table>    
      ";
            }
            else
            {
                 MailBody = $@"<table width='100%' border='0' cellspacing='0' cellpadding='0'>
      <tr>
          <!--header start-->
          <td width='100%' align='left' valign='top' style=' height: 61px; text-align: center;'>
              <a href='https://goliveindia.in/'><img src='http://www.simplydatatech.com/assets/image/new/Logo.png' alt='' width='240' /></a>
          </td>
          <!--header end-->
      </tr>


      <tr>
          <!--content start-->
          <td width='100%' align='center' valign='top' style='padding:20px 0;'>
              <table width='98%' border='0' cellspacing='0' cellpadding='0'>
                  <tr>
                      <td width='98%' align='left' valign='top'>
                          <h3 style='padding:0 0 10px 0; margin:0; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif; color:#000; font-size:17px; font-weight:normal;'>Hi {name},</h3>
                          <p style='padding:0 0 20px 0; margin:0; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif; color:#555; font-size:16px; font-weight:normal;'>Thank you for reaching to us. Our concern team will look in to it and will get back to you soon!</p>
                        
                      </td>
                  </tr>
                  <tr>
                      <td width='98%' align='left' valign='top' style='padding:20px 0 0 0;'>
                          <h3 style='padding:0 0 0 10px; margin:0; background:orange; font-family:Trebuchet MS, Arial, Helvetica, sans-serif; color:#fff; font-size:20px; font-weight:normal; height:41px; line-height:41px;'>Submitted Details</h3>
                          <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                              <tr>
                                  <td width='100%' align='left' valign='top' style='padding:10px; border:1px solid #ccc; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif; color:#555; font-size:16px; font-weight:normal;'>
                                      <p style='padding:0 0 10px 0; margin:0;'><strong style='font-size:17px; color:#000;'>Name :</strong> {name}</p>
                                      <p style='padding:0 0 10px 0; margin:0;'><strong style='font-size:17px; color:#000;'>Email :</strong> {email}</p>
                                      <p style='padding:0 0 10px 0; margin:0;'><strong style='font-size:17px; color:#000;'>Mobile :</strong> {mobile}</p>
                                      <p style='padding:0 0 10px 0; margin:0;'><strong style='font-size:17px; color:#000;'>Course :</strong> {course}</p>
                                      <p style='padding:0 0 10px 0; margin:0;'><strong style='font-size:17px; color:#000;'>Linkedn URL :</strong> {linkedinurl}</p>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td width='98%' align='left' valign='top' style='padding:20px 0 0 0;'>
                          <p style='padding:0 0 5px 0; margin:0; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif; color:#000; font-size:17px; font-weight:normal;'>Thanking You!</p>
                          <p style='padding:0; margin:0; font-family:Trebuchet MS, Arial, Helvetica, sans-serif; color:#000; font-size:17px; font-weight:normal;'><span style='color:orange;'>Simplydatatech</span> Team</p>
                      </td>
                  </tr>
              </table>
          </td>
          <!--content end-->
      </tr>

      <tr><td height='20' style='padding:0px'></td> </tr>
     
      
  </table>    
      ";
            }
            EmailDetails obj = new EmailDetails();
            obj.ReceiverEmail = new List<string>() { email };
            obj.CCReceiverEmail = new List<string>() { "info@simplydatatech.com" };
            obj.EmailSubject = "Request a callback";
            obj.EmailBody = MailBody;
            //var res = mail.SendEmail(new string[] {email }, subject, message, null, null, null);
            var res = mail.SendEmail(obj);
            if (res == true)
            {
                sendstatus = 1;
            }
            else
            {
                sendstatus = 0;
            }

            return Json(sendstatus, JsonRequestBehavior.AllowGet);
        }

    }
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

}