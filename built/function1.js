"use strict";
const znk_infra_1 = require("znk-infra");
exports.handler = function (event, context, callback) {
    let storage = new znk_infra_1.Storage();
    storage.addItem('item1');
    return 'done';
};
// export class Plan {
//     private _name: string;
// 	private _config: Config;
// 	private _storage: Storage;
// 	constructor(name: string) {
// 		this._storage = new Storage();
// 		this._name=name;
// 		this._config = new Config('dev');
// 	}
// 	public get name(): string {
// 		return this._name;
// 	}
// 	public set name(value: string) {
// 		this._name = value;
// 	}
// 	public greet(): string {
//         return 'Hello';
//     }
// 	public getConfig(): string {
// 		return this._config.getEnv('dev').name;
// 	}
// 	public async getInfo(){
// 		return await this._storage.getItem(0);
// 	}
// 	public async addAndGet(){
// 		 this._storage.addItem('item1');
// 		 this._storage.addItem('item2');
// 		 this._storage.addItem('item3');
// 		 console.log(await this._storage.getAll());
// 		 return await this._storage.getItem(1);
// 	}
// 	/**
// 	 * Returns a Promise<string> that resolves after given time.
// 	 *
// 	 * @param {string} name - Somebody's name
// 	 * @param {number=} [delay=2000] - Number of milliseconds to delay resolution.
// 	 * @returns {Promise<string>}
// 	 */
// 	// private delayedHello(name: string, delay: number = 2000): Promise<string> {
// 	// 	// tslint:disable-next-line no-string-based-set-timeout
// 	// 	return new Promise((resolve) => setTimeout(resolve(`Created plan, ${name}`), delay));
// 	// }
// 	private delayedHello(name: string): Promise<string> {
// 		// tslint:disable-next-line no-string-based-set-timeout
// 		return new Promise((resolve) => resolve(`Created plan, ${name}`));
// 	}
// 	 public async create(name) { // tslint:disable-line
// 		return await this.delayedHello(name);
// 	}
// }
// export function handler(event: S3Event, context: Context, callback: Callback) {
//     // Read options from the event.
//     console.log("Reading options from event:\n", util.inspect(event, { depth: 5 }));
//     const srcBucket = event.Records[0].s3.bucket.name;
//     // Object key may have spaces or unicode non-ASCII characters.
//     const srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
//     const dstBucket = srcBucket + "resized";
//     const dstKey = "resized-" + srcKey;
//     // Sanity check: validate that source and destination are different buckets.
//     if (srcBucket === dstBucket) {
//         callback(new Error("Source and destination buckets are the same."));
//         return;
//     }
//     // Infer the image type.
//     const typeMatch = srcKey.match(/\.([^.]*)$/);
//     if (!typeMatch) {
//         callback(new Error("Could not determine the image type."));
//         return;
//     }
//     const imageType = typeMatch[1];
//     if (imageType !== "jpg" && imageType !== "png") {
//         callback(new Error(`Unsupported image type: ${imageType}`));
//         return;
//     }
//     // Download the image from S3, transform, and upload to a different S3 bucket.
//     (async () => {
//         const data = await s3.getObject({ Bucket: srcBucket, Key: srcKey }).promise();
//         const imgSize = await getSize(data.Body);
//         const scalingFactor = Math.min(
//             MAX_WIDTH / imgSize.width,
//             MAX_HEIGHT / imgSize.height,
//         );
//         const width = scalingFactor * imgSize.width;
//         const height = scalingFactor * imgSize.height;
//         const resizedImg = await resize(data.Body, width, height, imageType);
//         // Stream the transformed image to a different S3 bucket.
//         const params: AWS.S3.PutObjectRequest = {
//             Bucket: dstBucket,
//             Key: dstKey,
//             Body: resizedImg,
//             ContentType: data.ContentType,
//         };
//         await s3.putObject(params).promise();
//     })().then((result) => {
//         const message = `Successfully resized ${srcBucket}/${srcKey} and uploaded to ${dstBucket}/${dstKey}`;
//         console.log(message);
//         callback(null, message);
//         return;
//     }).catch((err) => {
//         const message = `Unable to resize ${srcBucket}/${srcKey} and upload to ${dstBucket}/${dstKey} due to an error: ${err}`;
//         console.error(message);
//         callback(err);
//     });
// } 
