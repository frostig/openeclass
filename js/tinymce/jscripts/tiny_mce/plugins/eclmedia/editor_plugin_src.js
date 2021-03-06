/**
 * editor_plugin_src.js
 *
 */

(function() {
	tinymce.create('tinymce.plugins.EclassMediaPlugin', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceEclMedia', function() {
				ed.windowManager.open({
					file : url + '/eclmedia.htm',
					width : 440 + parseInt(ed.getLang('eclmedia.delta_width', 0)),
					height : 330 + parseInt(ed.getLang('eclmedia.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url
				});
			});

			// Register buttons
			ed.addButton('eclmedia', {
				title : 'eclmedia.desc',
				cmd : 'mceEclMedia',
                                image : url + '/img/video.gif'
			});
                        
                        ed.onNodeChange.add(function(ed, cm, n, co) {
				cm.setActive('eclmedia', n.nodeName == 'A' && !n.name && ed.dom.getAttrib(n, 'class') == 'colorboxframe');
			});
		},

		getInfo : function() {
			return {
				longname : 'eClass media',
				author : 'Openeclass team',
				authorurl : 'http://openeclass.org',
				infourl : 'http://openeclass.org',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('eclmedia', tinymce.plugins.EclassMediaPlugin);
})();
