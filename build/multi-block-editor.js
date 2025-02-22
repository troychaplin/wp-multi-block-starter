(() => {
	'use strict';
	var e,
		o = {
			711: () => {
				const e = window.wp.blocks,
					o = window.wp.i18n,
					r = window.wp.blockEditor,
					t = window.ReactJSXRuntime,
					l = JSON.parse('{"UU":"create-block/block-one"}');
				(0, e.registerBlockType)(l.UU, {
					edit: function () {
						return (0, t.jsx)('p', {
							...(0, r.useBlockProps)(),
							children: (0, o.__)(
								'Block One – hello from the editor!',
								'block-one'
							),
						});
					},
					save: function () {
						return (0, t.jsx)('p', {
							...r.useBlockProps.save(),
							children:
								'Block One – hello from the saved content!',
						});
					},
				});
				const c = JSON.parse('{"UU":"create-block/block-two"}');
				(0, e.registerBlockType)(c.UU, {
					edit: function () {
						return (0, t.jsx)('p', {
							...(0, r.useBlockProps)(),
							children: (0, o.__)(
								'Block Two – hello from the editor!',
								'block-two'
							),
						});
					},
					save: function () {
						return (0, t.jsx)('p', {
							...r.useBlockProps.save(),
							children:
								'Block Two – hello from the saved content!',
						});
					},
				});
				const n = JSON.parse('{"UU":"create-block/block-three"}');
				(0, e.registerBlockType)(n.UU, {
					edit: function () {
						return (0, t.jsx)('p', {
							...(0, r.useBlockProps)(),
							children: (0, o.__)(
								'Block Three – hello from the editor!',
								'block-three'
							),
						});
					},
				});
				const s = JSON.parse('{"UU":"create-block/block-four"}');
				(0, e.registerBlockType)(s.UU, {
					edit: function () {
						return (0, t.jsx)('p', {
							...(0, r.useBlockProps)(),
							children: (0, o.__)(
								'Block Four – hello from the editor!',
								'block-four'
							),
						});
					},
				});
			},
		},
		r = {};
	function t(e) {
		var l = r[e];
		if (void 0 !== l) return l.exports;
		var c = (r[e] = { exports: {} });
		return o[e](c, c.exports, t), c.exports;
	}
	(t.m = o),
		(e = []),
		(t.O = (o, r, l, c) => {
			if (!r) {
				var n = 1 / 0;
				for (k = 0; k < e.length; k++) {
					for (var [r, l, c] = e[k], s = !0, i = 0; i < r.length; i++)
						(!1 & c || n >= c) &&
						Object.keys(t.O).every((e) => t.O[e](r[i]))
							? r.splice(i--, 1)
							: ((s = !1), c < n && (n = c));
					if (s) {
						e.splice(k--, 1);
						var p = l();
						void 0 !== p && (o = p);
					}
				}
				return o;
			}
			c = c || 0;
			for (var k = e.length; k > 0 && e[k - 1][2] > c; k--)
				e[k] = e[k - 1];
			e[k] = [r, l, c];
		}),
		(t.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
		(() => {
			var e = { 48: 0, 897: 0 };
			t.O.j = (o) => 0 === e[o];
			var o = (o, r) => {
					var l,
						c,
						[n, s, i] = r,
						p = 0;
					if (n.some((o) => 0 !== e[o])) {
						for (l in s) t.o(s, l) && (t.m[l] = s[l]);
						if (i) var k = i(t);
					}
					for (o && o(r); p < n.length; p++)
						(c = n[p]), t.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
					return t.O(k);
				},
				r = (globalThis.webpackChunkwp_multi_block_starter =
					globalThis.webpackChunkwp_multi_block_starter || []);
			r.forEach(o.bind(null, 0)), (r.push = o.bind(null, r.push.bind(r)));
		})();
	var l = t.O(void 0, [897], () => t(711));
	l = t.O(l);
})();
