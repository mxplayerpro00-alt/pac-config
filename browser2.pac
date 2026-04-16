function FindProxyForURL(url, host) {

    // 🔍 Google services
    if (dnsDomainIs(host, "google.com") ||
        dnsDomainIs(host, "www.google.com") ||
        dnsDomainIs(host, "gstatic.com") ||
        dnsDomainIs(host, "googleapis.com")) {
        return "DIRECT";
    }

    // 🎬 Video / streaming (ALL major)
    if (dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "netflix.com") ||
        dnsDomainIs(host, "nflxvideo.net") ||
        dnsDomainIs(host, "bilibili.tv") ||
        dnsDomainIs(host, "aniwatch.to") ||
        dnsDomainIs(host, "animekai.to") ||
        shExpMatch(host, "*.video.*") ||
        shExpMatch(host, "*.stream.*")) {
        return "DIRECT";
    }

    // 📱 Social media
    if (dnsDomainIs(host, "facebook.com") ||
        dnsDomainIs(host, "fbcdn.net") ||
        dnsDomainIs(host, "messenger.com") ||
        dnsDomainIs(host, "tiktok.com") ||
        dnsDomainIs(host, "tiktokcdn.com")) {
        return "DIRECT";
    }

    // 🛒 Shopping
    if (dnsDomainIs(host, "shopee.ph") ||
        dnsDomainIs(host, "shopee.com") ||
        dnsDomainIs(host, "lazada.com")) {
        return "DIRECT";
    }

    // 🏠 Local network
    if (isPlainHostName(host) ||
        dnsDomainIs(host, ".local") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    // 🔥 Default → DIRECT (best performance)
    return "DIRECT";
}
