const ip = '127.0.0.1'

function numberip(ip) {
    ip=ip.split('.').map(Number);
    return ((ip[0]<<24)>>>0) + (ip[1]<<16) + (ip[2]<<8) + ip[3];
}
console.log(numberip(ip));