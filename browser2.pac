function FindProxyForURL(url, host) {

    // Streaming sites → DIRECT (para mabilis)
    if (dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "www.youtube.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "netflix.com") ||
        dnsDomainIs(host, "nflxvideo.net") ||
        dnsDomainIs(host, "bilibili.tv") ||
        dnsDomainIs(host, "animekai.to") ||
        dnsDomainIs(host, "aniwatch.to")) {
        return "DIRECT";
    }

    // Local network → DIRECT
    if (isPlainHostName(host) ||
        dnsDomainIs(host, ".local") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    // Default → DIRECT (SAFE)
    return "DIRECT";
}
