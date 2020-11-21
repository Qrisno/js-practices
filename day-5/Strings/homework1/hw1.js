function rmHtmlTags(param) {
    if (typeof param !== 'string') {
        throw new Error('Parameter has to be a string !');
    }
    let regex = /(<([^>]+)>)/ig;
    param = param.replace(regex, '')
    return param;

}
try {
    console.log(rmHtmlTags('<p><strong><em>Content</em></strong></p>'));
    console.log(rmHtmlTags('<p>Cool Stuff</p>'));
    rmHtmlTags(1);
} catch (e) {
    console.log(e.message);
}