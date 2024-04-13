using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Simplydatatech.Models
{
    public static class LogFile
    {
        public static void LogFileWrite(string message, string logFilePath)
        {
            FileStream fileStream = null;
            StreamWriter streamWriter = null;
            try
            {

                if (logFilePath.Equals("")) return;
                #region Create the Log file directory if it does not exists
                DirectoryInfo logDirInfo = null;
                FileInfo logFileInfo = new FileInfo(logFilePath);
                logDirInfo = new DirectoryInfo(logFileInfo.DirectoryName);
                if (!logDirInfo.Exists) logDirInfo.Create();
                #endregion Create the Log file directory if it does not exists

                if (!logFileInfo.Exists)
                {
                    fileStream = logFileInfo.Create();
                }
                else
                {
                    fileStream = new FileStream(logFilePath, FileMode.Append);
                }

                streamWriter = new StreamWriter(fileStream);
                streamWriter.WriteLine(message);

            }
            finally
            {
                if (streamWriter != null) streamWriter.Close();
                if (fileStream != null) fileStream.Close();

            }

        }
    }
}