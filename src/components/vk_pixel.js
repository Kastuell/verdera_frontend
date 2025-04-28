"use client";

import Script from "next/script";

export function VkMetrika() {
  // const pathName = usePathname();
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   ym(98646001, "hit", window.location.href);
  // }, [pathName, searchParams]);

  return (
    <Script id="yandex-metrika">
      {`
        !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?173',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1921769-beP81"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
      `}
    </Script>
  );
}
