// Version directive is set by Warzone when loading the shader
// (This shader supports GLSL 1.20 - 1.50 core.)

uniform vec4 color;
uniform sampler2D theTexture;

#if __VERSION__ >= 130
in vec2 uv;

out vec4 FragColor;
#else
varying vec2 uv;
#endif

void main()
{
	#if __VERSION__ >= 130
	FragColor = texture(theTexture, uv) * color;
	#else
	gl_FragColor = texture2D(theTexture, uv) * color;
	#endif
}
