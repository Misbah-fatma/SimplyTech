using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading;
using System.Web;

namespace Simplydatatech.Models
{

    public class MailConfig
    {


        public bool SendEmail(EmailDetails objEmail)
        {
            try
            {

                Attachment Attachment;
                String HOST = "smtpout.secureserver.net";
                String FROM = ConfigurationManager.AppSettings["FROM"].ToString();
                String FROMNAME = ConfigurationManager.AppSettings["FROMNAME"];
                String SMTP_USERNAME = ConfigurationManager.AppSettings["SMTP_USERNAME"].ToString();
                String SMTP_PASSWORD = ConfigurationManager.AppSettings["SMTP_PASSWORD"].ToString();
                int PORT = 587;
                System.Net.ServicePointManager.SecurityProtocol |=
    SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12;
                MailMessage message = new MailMessage();
                message.IsBodyHtml = true;
                message.From = new MailAddress(FROM, FROMNAME);
                if (objEmail.ReceiverEmail != null || objEmail.CCReceiverEmail != null || objEmail.BCCReceiverEmail != null)
                {
                    if (objEmail.ReceiverEmail != null)
                    {
                        if (objEmail.ReceiverEmail.Count > 0)
                        {
                            foreach (var ToMail in objEmail.ReceiverEmail)
                            {
                                message.To.Add(ToMail);
                            }
                        }
                    }

                    if (objEmail.CCReceiverEmail != null)
                    {
                        if (objEmail.CCReceiverEmail.Count > 0)
                        {
                            foreach (var CCMail in objEmail.CCReceiverEmail)
                            {
                                message.CC.Add(CCMail);
                            }
                        }
                    }

                    if (objEmail.BCCReceiverEmail != null)
                    {
                        if (objEmail.BCCReceiverEmail.Count > 0)
                        {
                            foreach (var BCCMail in objEmail.BCCReceiverEmail)
                            {
                                message.Bcc.Add(BCCMail);
                            }
                        }
                    }

                    message.IsBodyHtml = true;
                    message.Subject = objEmail.EmailSubject;
                    message.Body = objEmail.EmailBody;

                    if (objEmail.AttachZipFilePath != null)
                    {
                        foreach (var eachAttachZip in objEmail.AttachZipFilePath)
                        {
                            Attachment = new Attachment(eachAttachZip);
                            if (Attachment != null) { message.Attachments.Add(Attachment); }
                        }
                    }

                    var client = new System.Net.Mail.SmtpClient(HOST, PORT);
                    // Pass SMTP credentials
                    client.Credentials = new NetworkCredential(SMTP_USERNAME, SMTP_PASSWORD);
                    // Enable SSL encryption
                    client.EnableSsl = true;
                    //client.UseDefaultCredentials = false;
                    Thread T1 = new Thread(delegate ()
                    {
                        client.Send(message);
                    });
                    T1.Start();
                    string Message1 = "server1";
                    string filePath1 = AppDomain.CurrentDomain.BaseDirectory;
                    filePath1 = filePath1 + "/LogFiles/ErrorLogFile.txt";
                    LogFile.LogFileWrite(Message1, filePath1);
                    return true;


                }
                else
                {
                    string Message = "Receiver email is blank " + objEmail.EmailSubject;
                    string filePath = AppDomain.CurrentDomain.BaseDirectory;
                    filePath = filePath + "/LogFiles/ErrorLogFile.txt";
                    LogFile.LogFileWrite(Message, filePath);
                    return false;

                }

            }
            catch (Exception ex)
            {
                string Message = ex.Message;
                string filePath = AppDomain.CurrentDomain.BaseDirectory;
                filePath = filePath + "/LogFiles/ErrorLogFile.txt";
                LogFile.LogFileWrite(Message, filePath);
                return false;
            }

        }
    }
    public class EmailDetails
    {
        public List<string> ReceiverEmail { get; set; }
        public List<string> CCReceiverEmail { get; set; }
        public List<string> BCCReceiverEmail { get; set; }
        public List<string> AttachZipFilePath { get; set; }
        public string EmailSubject { get; set; }
        public string EmailBody { get; set; }
    }
}