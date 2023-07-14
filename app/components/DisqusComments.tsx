import { useEffect } from "react";

function DisqusComments({ shortname, identifier, title, url }) {
  useEffect(() => {
    window.disqus_config = function () {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
    };

    const script = document.createElement("script");
    script.src = `https://${shortname}.disqus.com/embed.js`;
    script.setAttribute("data-timestamp", Date.now().toString());
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [shortname, identifier, title, url]);

  return <div id="disqus_thread" />;
}

export default DisqusComments;
