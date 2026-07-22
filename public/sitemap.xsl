<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Sync-Tech</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: 'Plus Jakarta Sans', 'Inter', Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #1e293b;
            background-color: #eef6ff;
            margin: 0;
            padding: 0;
          }
          #header {
            background-color: #ffffff;
            padding: 20px 40px;
            border-bottom: 1px solid #dbeafe;
            display: flex;
            align-items: center;
            gap: 15px;
          }
          #header img {
            height: 40px;
          }
          #header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            color: #0f172a;
          }
          #content {
            padding: 40px;
            max-width: 960px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
            border-radius: 24px;
            margin-top: 30px;
            margin-bottom: 40px;
            border: 1px solid rgba(59, 130, 246, 0.2);
          }
          p {
            line-height: 1.6;
          }
          p.intro {
            color: #1e293b;
            margin-bottom: 20px;
            font-size: 15px;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          a:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 14px;
          }
          th {
            text-align: left;
            padding: 12px;
            border-bottom: 2px solid #bfdbfe;
            font-weight: 600;
            color: #1e40af;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #dbeafe;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
        </style>
      </head>
      <body>
        <div id="header">
          <img src="/favIcon.png" alt="Sync-Tech Logo" />
          <h1>XML Sitemap</h1>
        </div>
        <div id="content">
          <xsl:if test="sitemap:sitemapindex">
            <p class="intro">
              This is an XML Sitemap, meant for consumption by search engines.<br/>
              You can find more information about XML sitemaps on <a href="https://sitemaps.org">sitemaps.org</a>.
            </p>
            <p class="intro">This XML Sitemap Index file contains <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> sitemaps.</p>
            <table>
              <thead>
                <tr>
                  <th>Sitemap</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td>
                      <xsl:variable name="sitemapURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$sitemapURL}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="sitemap:urlset">
            <p class="intro">
              This is an XML Sitemap, meant for consumption by search engines.<br/>
              You can find more information about XML sitemaps on <a href="https://sitemaps.org">sitemaps.org</a>.
            </p>
            <p class="intro">This XML Sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.</p>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Priority</th>
                  <th>Change Frequency</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td><xsl:value-of select="sitemap:priority"/></td>
                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
