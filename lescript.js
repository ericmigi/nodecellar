

myString = '50:99:91:5B:A5:4D, (RSSI=,-68, (unknown), Manufacturer Specific Data company id=,0x4c, data:,02 15 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 13 37 11 72 C7';

var array = myString.split(',');

btMac = array[0];
rssi = array[2];
name = array[3];

console.log(btMac);
console.log(rssi);
if ( array[4] !=null){
	companyId = array[5];
	data = array[7];
	console.log(companyId);
	console.log(data);
};
