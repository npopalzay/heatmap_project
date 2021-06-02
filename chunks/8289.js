(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[8289],{64798:(t,e,a)=>{"use strict";a.d(e,{q:()=>i});var r=a(95962);function i(t,e){0===e.output&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(r.H`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===e.output||3===e.output?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("cameraNearFar","vec2"),t.vertex.code.add(r.H`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):t.vertex.code.add(r.H`
      void forwardLinearDepth() {}
    `)}},84982:(t,e,a)=>{"use strict";a.d(e,{T:()=>o});var r=a(95962),i=a(22682);function n(t){const e=t.fragment.code;e.add(r.H`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),e.add(r.H`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),e.add(r.H`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function o(t,e){const a=t.fragment.code;t.include(i.e),3===e.pbrMode||4===e.pbrMode?(a.add(r.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),a.add(r.H`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),a.add(r.H`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),a.add(r.H`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),a.add(r.H`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==e.pbrMode&&2!==e.pbrMode||(t.include(n),a.add(r.H`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),a.add(r.H`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),a.add(r.H`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),a.add(r.H`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),a.add(r.H`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),a.add(r.H`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},58639:(t,e,a)=>{"use strict";a.d(e,{h:()=>o});var r,i=a(95962),n=a(1741);function o(t){t.fragment.include(n.n),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(i.H`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}(r=o||(o={})).bindUniforms=function(t,e,a){e.shadowMappingEnabled&&(e.shadowMap.bind(t,a),e.shadowMap.bindView(t,e.origin))},r.bindViewCustomOrigin=function(t,e,a){e.shadowMappingEnabled&&e.shadowMap.bindView(t,a)},r.bindView=function(t,e){e.shadowMappingEnabled&&e.shadowMap.bindView(t,e.origin)}},2374:(t,e,a)=>{"use strict";a.d(e,{om:()=>b,xM:()=>w,LV:()=>y,yn:()=>x,W9:()=>H});var r=a(18029),i=a(94528),n=a(61168),o=a(4602),s=a(36786),l=a(30127),h=a(37088),c=a(85221),d=a(51856),f=a(84739),u=a(91987),p=a(87959),m=a(47038),g=(a(69162),a(48615)),v=a(83296);class b{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=2}}class x{constructor(){this._transform=(0,l.a)(),this._transformInverse=new S({value:this._transform},o.a,l.a),this._transformInverseTranspose=new S(this._transformInverse,o.b,l.a),this._transformTranspose=new S({value:this._transform},o.b,l.a),this._transformInverseRotation=new S({value:this._transform},d.b,s.a)}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){(0,o.c)(this._transform,t)}multiplyTransform(t){(0,o.m)(this._transform,this._transform,t)}set(t){(0,o.c)(this._transform,t),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,e){this.setTransformMatrix(t),this.multiplyTransform(e),this.invalidateLazyTransforms()}}class S{constructor(t,e,a){this.original=t,this.update=e,this.dirty=!0,this.transform=a()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class y{constructor(){this.min=new w,this.max=new w,this.hud=new w,this.ground=new w}init(t){this.min.init(t),this.max.init(t),this.hud.init(t),this.ground.init(t),this.all=[]}}class w{constructor(t){this.normal=(0,i.c)(),this.transformation=(0,l.a)(),this._ray=g.kx.create(),this.init(t)}get ray(){return this._ray}get hasIntersectionPoint(){return null!=this.dist}get distanceInRenderSpace(){if(null!=this.dist)return(0,n.a)(I,this.ray.direction,this.dist),(0,n.l)(I)}getIntersectionPoint(t){return!!this.hasIntersectionPoint&&((0,n.a)(I,this.ray.direction,this.dist),(0,n.b)(t,this.ray.origin,I),!0)}getTransformedNormal(t){return(0,n.g)(N,this.normal),N[3]=0,(0,f.t)(N,N,this.transformation),(0,n.g)(t,N),(0,n.n)(t,t),t}init(t){this.dist=void 0,this.target=void 0,this.name=void 0,this.drapedLayerOrder=void 0,this.drapedLayerGraphicOrder=void 0,this.center=null,this.geometryId=null,this.triangleNr=null,this.intersector="Stage",t?g.kx.copy(t,this._ray):this._ray=g.kx.create()}set(t,e,a,r,s,l,h,c,d,f){t instanceof v.T&&(t={type:"stage",obj:t}),this.dist=a,(0,n.g)(this.normal,r),(0,o.c)(this.transformation,s),this.target=t,this.name=e,this.drapedLayerOrder=l,this.center=h?(0,i.b)(h):null,this.geometryId=c,this.triangleNr=d,this.drapedLayerGraphicOrder=f}copyFrom(t){g.kx.copy(t._ray,this._ray),this.dist=t.dist,this.target=t.target,this.name=t.name,this.drapedLayerOrder=t.drapedLayerOrder,this.center=t.center?(0,i.b)(t.center):null,this.geometryId=t.geometryId,this.triangleNr=t.triangleNr,this.intersector=t.intersector,this.drapedLayerGraphicOrder=t.drapedLayerGraphicOrder,(0,n.g)(this.normal,t.normal),(0,o.c)(this.transformation,t.transformation)}toOwner(t){if(!this.target)return null;switch(this.target.type){case"stage":return M(this.target.obj.metadata,t);case"external":switch(this.intersector){case"PointRenderer":return function(t,e){const a=t.metadata.layerUid;return null!=a?e.map.findLayerByUid(a):null}(this.target,t);case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return M(this.target.metadata,t);case"TerrainRenderer":return t.map&&t.map.ground}}return null}toGraphic(t){if(!this.target)return null;switch(this.target.type){case"stage":return T(this.target.obj.metadata,t);case"external":switch(this.intersector){case"PointRenderer":return function(t){return t.metadata.createGraphic()}(this.target);case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return T(this.target.metadata,t)}}return null}}function M(t,e){return(0,r.Wi)(t)||null==t.layerUid?null:(0,r.pC)(e.graphicsView)&&t.layerUid===e.graphicsView.graphics3d.layer.id?e.graphics:e.map.findLayerByUid(t.layerUid)}function T(t,e){if((0,r.Wi)(t))return null;const a=M(t,e);if((0,r.Wi)(a))return null;if(a===e.graphics)return(0,r.pC)(e.graphicsView)?(0,r.Wg)(e.graphicsView.getGraphicFromGraphicUid(t.graphicUid)):null;const i=e.allLayerViews.find((t=>t.layer===a));return i?(o=t,!(n=i)||n.suspended?null:"getGraphicFromIntersectorMetadata"in n&&o?n.getGraphicFromIntersectorMetadata(o):"getGraphicFromGraphicUid"in n&&null!=o.graphicUid?n.getGraphicFromGraphicUid(o.graphicUid):null):null;var n,o}const z=new class{constructor(t=0){this.offset=t,this.sphere=(0,m.c)(),this.tmpVertex=(0,i.c)()}applyToVertex(t,e,a){const r=this.objectTransform.transform;let i=r[0]*t+r[4]*e+r[8]*a+r[12],n=r[1]*t+r[5]*e+r[9]*a+r[13],o=r[2]*t+r[6]*e+r[10]*a+r[14];const s=this.offset/Math.sqrt(i*i+n*n+o*o);i+=i*s,n+=n*s,o+=o*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*i+l[4]*n+l[8]*o+l[12],this.tmpVertex[1]=l[1]*i+l[5]*n+l[9]*o+l[13],this.tmpVertex[2]=l[2]*i+l[6]*n+l[10]*o+l[14],this.tmpVertex}applyToMinMax(t,e){const a=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*a,t[1]+=t[1]*a,t[2]+=t[2]*a;const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r}applyToAabb(t){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const a=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*a,t[4]+=t[4]*a,t[5]+=t[5]*a,t}applyToBoundingSphere(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),a=this.offset/e;return this.sphere[0]=t[0]+t[0]*a,this.sphere[1]=t[1]+t[1]*a,this.sphere[2]=t[2]+t[2]*a,this.sphere[3]=t[3]+t[3]*this.offset/e,this.sphere}};function H(t){return(0,r.pC)(t)?(z.offset=t,z):null}new class{constructor(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=(0,i.c)(),this.mbs=(0,c.a)(),this.obb={center:(0,i.c)(),halfSize:(0,p.c)(),quaternion:null}}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}applyToVertex(t,e,a){const r=t,i=e,n=a+this.componentLocalOriginLength,o=this.offset/Math.sqrt(r*r+i*i+n*n);return this.tmpVertex[0]=t+r*o,this.tmpVertex[1]=e+i*o,this.tmpVertex[2]=a+n*o,this.tmpVertex}applyToAabb(t){const e=t[0],a=t[1],r=t[2]+this.componentLocalOriginLength,i=t[3],n=t[4],o=t[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(e*e+a*a+r*r);t[0]+=e*s,t[1]+=a*s,t[2]+=r*s;const l=this.offset/Math.sqrt(i*i+n*n+o*o);return t[3]+=i*l,t[4]+=n*l,t[5]+=o*l,t}applyToMbs(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),a=this.offset/e;return this.mbs[0]=t[0]+t[0]*a,this.mbs[1]=t[1]+t[1]*a,this.mbs[2]=t[2]+t[2]*a,this.mbs[3]=t[3]+t[3]*this.offset/e,this.mbs}applyToObb(t){const e=t.center,a=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);this.obb.center[0]=e[0]+e[0]*a,this.obb.center[1]=e[1]+e[1]*a,this.obb.center[2]=e[2]+e[2]*a,(0,n.q)(this.obb.halfSize,t.halfSize,t.quaternion),(0,n.b)(this.obb.halfSize,this.obb.halfSize,t.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,(0,n.f)(this.obb.halfSize,this.obb.halfSize,t.center),(0,u.c)(_,t.quaternion),(0,n.q)(this.obb.halfSize,this.obb.halfSize,_),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}},new class{constructor(t=0){this.offset=t,this.tmpVertex=(0,i.c)()}applyToVertex(t,e,a){const r=t+this.localOrigin[0],i=e+this.localOrigin[1],n=a+this.localOrigin[2],o=this.offset/Math.sqrt(r*r+i*i+n*n);return this.tmpVertex[0]=t+r*o,this.tmpVertex[1]=e+i*o,this.tmpVertex[2]=a+n*o,this.tmpVertex}applyToAabb(t){const e=t[0]+this.localOrigin[0],a=t[1]+this.localOrigin[1],r=t[2]+this.localOrigin[2],i=t[3]+this.localOrigin[0],n=t[4]+this.localOrigin[1],o=t[5]+this.localOrigin[2],s=this.offset/Math.sqrt(e*e+a*a+r*r);t[0]+=e*s,t[1]+=a*s,t[2]+=r*s;const l=this.offset/Math.sqrt(i*i+n*n+o*o);return t[3]+=i*l,t[4]+=n*l,t[5]+=o*l,t}},(0,i.c)();const I=(0,i.c)(),N=(0,c.a)(),_=(0,h.a)()}}]);