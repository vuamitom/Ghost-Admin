import PostSerializer from './post';

export default PostSerializer.extend({
    serialize(/*snapshot, options*/) {
        let json = this._super(...arguments);

        // Properties that exist on the model but we don't want sent in the payload
	/*
        delete json.uuid;
        // Inserted locally as a convenience.
        delete json.author_id;
        // Read-only virtual property.
        delete json.url;
        // Deprecated property (replaced with data.authors)
        delete json.author;
        // Fee is not applicable to page
	*/
        delete json.fee;
        delete json.email_subject;
        delete json.send_email_when_published;
        delete json.email_id;
        delete json.email;

        return json;
    }
});
