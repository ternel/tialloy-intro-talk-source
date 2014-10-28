var args = arguments[0] || {};

var data = [
    { name: "Benjamin Clay", talk: "Titanium", searchable: "benjamin clay ternel titanium alloy", date: "2014-10-29 10:30:00" },
    { name: "Geoffrey Bachelet", talk: "Docker", searchable: "geoffrey bachelet ubermuda docker", date: "2014-10-29 10:30:00" },
    { name: "William Durand", talk: "REST", searchable: "william durand symfony2 rest couac", date: "2014-10-29 10:30:00" }
];

var items = [];
for (var i in data) {
    items.push({
        properties: {
            itemId: i,
            searchableText: data[i].searchable
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