var args = arguments[0] || {};
var moment = require('alloy/moment');

var data = [
    { name: "Benjamin Clay", talk: "Titanium", searchable: "benjamin clay ternel titanium alloy", date: "2014-10-29T10:30:00+01:00" },
    { name: "Geoffrey Bachelet", talk: "Docker", searchable: "geoffrey bachelet ubermuda docker", date: "2014-10-29T10:30:00+01:00" },
    { name: "William Durand", talk: "REST", searchable: "william durand symfony2 rest couac", date: "2014-10-29T16:30:00+01:00" }
];

var items = [];
for (var i in data) {
    items.push({
        properties: {
            itemId: i,
            searchableText: data[i].searchable,
            date: data[i].date
        },
        name: {
            text: data[i].name
        },
        talk: {
            text: data[i].talk
        }
    });

    $.section.setItems(items);
}

$.speakers.addEventListener('itemclick', function(e) {
    var item = e.section.getItemAt(e.itemIndex);

    alert(moment(item.properties.date).format('LLL'));
});