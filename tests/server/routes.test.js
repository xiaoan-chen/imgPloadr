var home = require('../../controllers/home'),
	image = require('../../controllers/image'),
	routes = require('../../server/routes');

describe('Routes', function() {
	var router = {
		get: sinon.spy(),
		post: sinon.spy(),
		delete: sinon.spy()
	};
	beforeEach(function() {
		routes.initialize(router);
	});
	describe('GETs', function() {
		it('should handle /', function() {
			expect(router.get).to.be.calledWith('/', home.index);
		});
		it('should handle /images/:image_id', function() {
			expect(router.get).to.be.calledWith('/images/:image_id', image.index);
		});
	});
	describe('POSTs', function() {
		it('should handle /images', function() {
			expect(router.post).to.be.calledWith('/images', image.create);
		});
		it('should handle /images/:image_id/like', function() {
			expect(router.post).to.be.calledWith('/images/:image_id/like', image.like);
		});
		it('should handle /images/:image_id/comment', function() {
			expect(router.post).to.be.calledWith('/images/:image_id/comment', image.comment);
		});
	});
	describe('DELETEs', function() {
		it('should handle /images/:image_id', function() {
			expect(router.delete).to.be.calledWith('/images/:image_id', image.remove);
		});
	});
});
