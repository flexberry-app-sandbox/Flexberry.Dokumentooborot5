﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Dokumentooborot5
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч права.
    /// </summary>
    // *** Start programmer edit section *** (ТЧПрава CustomAttributes)

    // *** End programmer edit section *** (ТЧПрава CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч права")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧПраваE", new string[] {
            "ПраваПол as \'Права пол\'"})]
    public class ТЧПрава : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Dokumentooborot5.ПраваПол fПраваПол;
        
        private IIS.Dokumentooborot5.АвПользователи fАвПользователи;
        
        // *** Start programmer edit section *** (ТЧПрава CustomMembers)

        // *** End programmer edit section *** (ТЧПрава CustomMembers)

        
        /// <summary>
        /// ПраваПол.
        /// </summary>
        // *** Start programmer edit section *** (ТЧПрава.ПраваПол CustomAttributes)

        // *** End programmer edit section *** (ТЧПрава.ПраваПол CustomAttributes)
        public virtual IIS.Dokumentooborot5.ПраваПол ПраваПол
        {
            get
            {
                // *** Start programmer edit section *** (ТЧПрава.ПраваПол Get start)

                // *** End programmer edit section *** (ТЧПрава.ПраваПол Get start)
                IIS.Dokumentooborot5.ПраваПол result = this.fПраваПол;
                // *** Start programmer edit section *** (ТЧПрава.ПраваПол Get end)

                // *** End programmer edit section *** (ТЧПрава.ПраваПол Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧПрава.ПраваПол Set start)

                // *** End programmer edit section *** (ТЧПрава.ПраваПол Set start)
                this.fПраваПол = value;
                // *** Start programmer edit section *** (ТЧПрава.ПраваПол Set end)

                // *** End programmer edit section *** (ТЧПрава.ПраваПол Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Dokumentooborot5.АвПользователи.
        /// </summary>
        // *** Start programmer edit section *** (ТЧПрава.АвПользователи CustomAttributes)

        // *** End programmer edit section *** (ТЧПрава.АвПользователи CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "АвПользователи"})]
        public virtual IIS.Dokumentooborot5.АвПользователи АвПользователи
        {
            get
            {
                // *** Start programmer edit section *** (ТЧПрава.АвПользователи Get start)

                // *** End programmer edit section *** (ТЧПрава.АвПользователи Get start)
                IIS.Dokumentooborot5.АвПользователи result = this.fАвПользователи;
                // *** Start programmer edit section *** (ТЧПрава.АвПользователи Get end)

                // *** End programmer edit section *** (ТЧПрава.АвПользователи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧПрава.АвПользователи Set start)

                // *** End programmer edit section *** (ТЧПрава.АвПользователи Set start)
                this.fАвПользователи = value;
                // *** Start programmer edit section *** (ТЧПрава.АвПользователи Set end)

                // *** End programmer edit section *** (ТЧПрава.АвПользователи Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧПраваE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧПраваE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧПраваE", typeof(IIS.Dokumentooborot5.ТЧПрава));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧПрава.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧПрава CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧПрава CustomAttributes)
    public class DetailArrayOfТЧПрава : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Dokumentooborot5.DetailArrayOfТЧПрава members)

        // *** End programmer edit section *** (IIS.Dokumentooborot5.DetailArrayOfТЧПрава members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧПрава by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧПрава.
        /// </summary>
        public DetailArrayOfТЧПрава(IIS.Dokumentooborot5.АвПользователи fАвПользователи) : 
                base(typeof(ТЧПрава), ((ICSSoft.STORMNET.DataObject)(fАвПользователи)))
        {
        }
        
        public IIS.Dokumentooborot5.ТЧПрава this[int index]
        {
            get
            {
                return ((IIS.Dokumentooborot5.ТЧПрава)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Dokumentooborot5.ТЧПрава dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
