function FindProxyForURL(url, host) {

    // ===== LOCAL / LAN =====
    // Para hindi dumaan sa unnecessary checks
    if (isPlainHostName(host) ||
        dnsDomainIs(host, ".local") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0")) {
        return "DIRECT";
    }

    // ===== GOOGLE / SEARCH =====
    if (dnsDomainIs(host, "google.com") ||
        dnsDomainIs(host, "www.google.com") ||
        dnsDomainIs(host, "googleapis.com") ||
        dnsDomainIs(host, "gstatic.com") ||
        dnsDomainIs(host, "googleusercontent.com")) {
        return "DIRECT";
    }

    // ===== YOUTUBE / VIDEO STREAMING =====
    if (dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "www.youtube.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "ytimg.com") ||
        dnsDomainIs(host, "netflix.com") ||
        dnsDomainIs(host, "nflxvideo.net") ||
        dnsDomainIs(host, "bilibili.tv") ||
        dnsDomainIs(host, "aniwatch.to") ||
        dnsDomainIs(host, "animekai.to") ||
        shExpMatch(host, "*.video.*") ||
        shExpMatch(host, "*.stream.*") ||
        shExpMatch(host, "*.cdn.*")) {
        return "DIRECT";
    }

    // ===== SOCIAL MEDIA =====
    if (dnsDomainIs(host, "facebook.com") ||
        dnsDomainIs(host, "fbcdn.net") ||
        dnsDomainIs(host, "messenger.com") ||
        dnsDomainIs(host, "instagram.com") ||
        dnsDomainIs(host, "cdninstagram.com") ||
        dnsDomainIs(host, "tiktok.com") ||
        dnsDomainIs(host, "tiktokcdn.com") ||
        dnsDomainIs(host, "twitter.com") ||
        dnsDomainIs(host, "x.com")) {
        return "DIRECT";
    }

    // ===== SHOPPING =====
    if (dnsDomainIs(host, "shopee.ph") ||
        dnsDomainIs(host, "shopee.com") ||
        dnsDomainIs(host, "lazada.com") ||
        dnsDomainIs(host, "lazada.com.ph")) {
        return "DIRECT";
    }

    // ===== DEFAULT =====
    // Best performance setup:
    // walang proxy delay, stable browsing + smooth video
    return "DIRECT";
}
