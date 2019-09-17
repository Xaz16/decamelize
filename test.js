import test from 'ava';
import decamelize from '.';

test('decamelize', t => {
	t.is(decamelize(''), '');
	t.is(decamelize('unicornsAndRainbows'), 'unicorns_and_rainbows');
	t.is(decamelize('UNICORNS AND RAINBOWS'), 'unicorns and rainbows');
	t.is(decamelize('unicorns-and-rainbows'), 'unicorns-and-rainbows');
	t.is(decamelize('unicornsAndRainbows', '-'), 'unicorns-and-rainbows');
	t.is(decamelize('unicor1nsAndRain2bows', '-'), 'unicor-1-ns-and-rain-2-bows');
	t.is(decamelize('unicor1s3nsAndRain22213123123bows', '-'), 'unicor-1-s-3-ns-and-rain-22213123123-bows');
	t.is(decamelize('thisIsATest'), 'this_is_a_test');
	t.is(decamelize('thisIsATest', ' '), 'this is a test');
	t.is(decamelize('thisIsATest', ''), 'thisisatest');
	t.is(decamelize('unicornRainbow', '|'), 'unicorn|rainbow');
	t.is(decamelize('thisHasSpecialCharactersLikeČandŠ', ' '), 'this has special characters like čand š');
});

test('handles acronyms', t => {
	t.is(decamelize('myURLString'), 'my_url_string');
	t.is(decamelize('URLString'), 'url_string');
	t.is(decamelize('StringURL'), 'string_url');
	t.is(decamelize('testGUILabel'), 'test_gui_label');
});
