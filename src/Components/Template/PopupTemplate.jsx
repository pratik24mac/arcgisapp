const PopupTemplate = {
  title: "{SITE_NAME}",
  content: [
    {
      type: "text",
      text: `<b>Site Address:</b> {SITE_ADDRESS}<br/>
             <b>Carbon Monoxide (PPM):</b> {CARBON_MONOXIDE_PPM}<br/>
             <b>Nitrogen Dioxide (PPM):</b> {NITROGEN_DIOXIDE_PPM}<br/>
             <b>Ozone (PPM):</b> {OZONE_PPM}<br/>
             <b>PM10 (µg/m³):</b> {PM10_UG_M3}<br/>
             <b>PM2.5 (µg/m³):</b> {PM25_UG_M3}<br/>
             <b>Sulfur Dioxide (PPB):</b> {SULFUR_DIOXIDE_PPB}<br/>
             <b>Sample Hour:</b> {SAMPLE_HOUR}`
    },
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "SAMPLE_TIMESTAMP",
          label: "Sample Timestamp",
          format: {
            dateFormat: "short-date-short-time",
          },
        },
      ],
    },
  ],
};

export default PopupTemplate;
