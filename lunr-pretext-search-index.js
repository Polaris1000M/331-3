var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "landing-2",
  "level": "1",
  "url": "landing-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Author M. Chen   "
},
{
  "id": "3-31-26",
  "level": "1",
  "url": "3-31-26.html",
  "type": "Section",
  "number": "1",
  "title": "3-31-26",
  "body": " 3-31-26  Introduction to Field Extensions, Field Adjunctions, and the Characteristic.   Subfield  Given a field , a subfield of is a subset of , closed under , , , .    Extension  An extension of is a field containing as a subfield. Denoted .    Injectivity of Field Homomorphisms  Any homomorphism of fields are injective.  Note that we only require the codomain of the homomorphism to be a nonzero ring.   Let and be fields and assume is a ring homomorphism. Take an ideal of . Assume . When, is injective, and we are done. Now assume . By the properties of fields, it must be the case that and . However, this contradicts in . Thus, , so is injective.     Field Homomorphism Codomain Structures  Take . turns into an -algebra. It follows that is an -vector space.    Degree  The degree of the extension is the degree of as an -vector space.  Denoted .    Degree of   . Thus, is a basis for so = 2.    Degree of  If , we have , as the cardinality of has the same cardinality as the power set of . Since the power set of has strictly greater cardinality than by Cantor's Theorem, it follows that is uncountable.  Now, assume has a finite basis. Then, the set of linear combinations of the finite basis with coefficients in would be countable, contradicting the uncountability of . Consequently, any basis of as a -vector space must be infinite, so .    Intermediate Field  An intermediate field of is a field such that and is an extension of .      . Let . Then, is a field.   The field axioms for addition, multiplication, and distributivity are easily shown.  Additionally, we have . The denominator must be nonzero for nonzero and . This is clearly true if only one or is nonzero. Thus, suppose both and are nonzero. If , then which implies is rational. Consequently, is closed under multiplicative inverses.     Field Adjunction  Take field extension and let . Let the field adjunction  be the minimal field , intermediate to , containing .    Intersections of Fields  Given fields , is also a field.  Note that this generalizes to arbitrary intersections.    Intersections and Field Adjunctions  is the intersection of all intermediate fields of containing .    Characteristic  Given a field , the characteristic of , denoted , is the minimal positive integer such that . If there is no such , then .  Note that characteristic is preserved under field extensions and subfields.    Ring is a field for prime.   "
},
{
  "id": "def-subfield",
  "level": "2",
  "url": "3-31-26.html#def-subfield",
  "type": "Definition",
  "number": "1.1",
  "title": "Subfield.",
  "body": " Subfield  Given a field , a subfield of is a subset of , closed under , , , .  "
},
{
  "id": "def-extension",
  "level": "2",
  "url": "3-31-26.html#def-extension",
  "type": "Definition",
  "number": "1.2",
  "title": "Extension.",
  "body": " Extension  An extension of is a field containing as a subfield. Denoted .  "
},
{
  "id": "prop-field-homomorphisms-injective",
  "level": "2",
  "url": "3-31-26.html#prop-field-homomorphisms-injective",
  "type": "Proposition",
  "number": "1.3",
  "title": "Injectivity of Field Homomorphisms.",
  "body": " Injectivity of Field Homomorphisms  Any homomorphism of fields are injective.  Note that we only require the codomain of the homomorphism to be a nonzero ring.   Let and be fields and assume is a ring homomorphism. Take an ideal of . Assume . When, is injective, and we are done. Now assume . By the properties of fields, it must be the case that and . However, this contradicts in . Thus, , so is injective.   "
},
{
  "id": "prop-field-homomorphisms-codomain",
  "level": "2",
  "url": "3-31-26.html#prop-field-homomorphisms-codomain",
  "type": "Remark",
  "number": "1.4",
  "title": "Field Homomorphism Codomain Structures.",
  "body": " Field Homomorphism Codomain Structures  Take . turns into an -algebra. It follows that is an -vector space.  "
},
{
  "id": "def-degree",
  "level": "2",
  "url": "3-31-26.html#def-degree",
  "type": "Definition",
  "number": "1.5",
  "title": "Degree.",
  "body": " Degree  The degree of the extension is the degree of as an -vector space.  Denoted .  "
},
{
  "id": "ex-degree-C-R",
  "level": "2",
  "url": "3-31-26.html#ex-degree-C-R",
  "type": "Example",
  "number": "1.6",
  "title": "Degree of <span class=\"process-math\">\\(\\C\/\\R\\)<\/span>.",
  "body": " Degree of   . Thus, is a basis for so = 2.  "
},
{
  "id": "ex-degree-R-Q",
  "level": "2",
  "url": "3-31-26.html#ex-degree-R-Q",
  "type": "Example",
  "number": "1.7",
  "title": "Degree of <span class=\"process-math\">\\(\\R\/\\Q\\)<\/span>.",
  "body": " Degree of  If , we have , as the cardinality of has the same cardinality as the power set of . Since the power set of has strictly greater cardinality than by Cantor's Theorem, it follows that is uncountable.  Now, assume has a finite basis. Then, the set of linear combinations of the finite basis with coefficients in would be countable, contradicting the uncountability of . Consequently, any basis of as a -vector space must be infinite, so .  "
},
{
  "id": "def-intermediate-field",
  "level": "2",
  "url": "3-31-26.html#def-intermediate-field",
  "type": "Definition",
  "number": "1.8",
  "title": "Intermediate Field.",
  "body": " Intermediate Field  An intermediate field of is a field such that and is an extension of .  "
},
{
  "id": "ex-Q-sqrt-2",
  "level": "2",
  "url": "3-31-26.html#ex-Q-sqrt-2",
  "type": "Example",
  "number": "1.9",
  "title": "<span class=\"process-math\">\\(\\Q(\\sqrt 2)\\)<\/span>.",
  "body": "   . Let . Then, is a field.   The field axioms for addition, multiplication, and distributivity are easily shown.  Additionally, we have . The denominator must be nonzero for nonzero and . This is clearly true if only one or is nonzero. Thus, suppose both and are nonzero. If , then which implies is rational. Consequently, is closed under multiplicative inverses.   "
},
{
  "id": "def-field-adjunction",
  "level": "2",
  "url": "3-31-26.html#def-field-adjunction",
  "type": "Definition",
  "number": "1.10",
  "title": "Field Adjunction.",
  "body": " Field Adjunction  Take field extension and let . Let the field adjunction  be the minimal field , intermediate to , containing .  "
},
{
  "id": "prop-field-intersections",
  "level": "2",
  "url": "3-31-26.html#prop-field-intersections",
  "type": "Proposition",
  "number": "1.11",
  "title": "Intersections of Fields.",
  "body": " Intersections of Fields  Given fields , is also a field.  Note that this generalizes to arbitrary intersections.  "
},
{
  "id": "cor-intersections-field-adjunctions",
  "level": "2",
  "url": "3-31-26.html#cor-intersections-field-adjunctions",
  "type": "Corollary",
  "number": "1.12",
  "title": "Intersections and Field Adjunctions.",
  "body": " Intersections and Field Adjunctions  is the intersection of all intermediate fields of containing .  "
},
{
  "id": "def-characteristic",
  "level": "2",
  "url": "3-31-26.html#def-characteristic",
  "type": "Definition",
  "number": "1.13",
  "title": "Characteristic.",
  "body": " Characteristic  Given a field , the characteristic of , denoted , is the minimal positive integer such that . If there is no such , then .  Note that characteristic is preserved under field extensions and subfields.  "
},
{
  "id": "3-31-26-16",
  "level": "2",
  "url": "3-31-26.html#3-31-26-16",
  "type": "Example",
  "number": "1.14",
  "title": "",
  "body": " Ring is a field for prime.  "
},
{
  "id": "4-1-26",
  "level": "1",
  "url": "4-1-26.html",
  "type": "Section",
  "number": "2",
  "title": "4-1-26",
  "body": " 4-1-26  Characteristic, Redefinition of Field Adjunctions, and Minimal Polynomials.   Primality of Characteristic  is either or prime for field .   Assume for some positive, composite . Let . It follows that . By the Fourth Isomorphism Theorem, there is a bijection between the ideals of containing and the ideals of . Since is composite by assumption, assume for integers and . It follows that and . However, this implies the existence of more than two ideals in , which contradicts the property that fields have only two ideals.  Thus, if is nonzero, then must be prime.      We want to define objects like without a larger \"ambient\" field like . Thus, define such that  .  contains such that .  is minimal.    Note that . , , and , so there is no element in whose square is .  The above properties suggest that where is the image of in .    Irreducibility of for Field  For any field and any polynomial of positive degree, the ring is a field if and only if is irreducible.    is irreducible. Assume is reducible so . However, there is no such that or .    Degree of  Let be a field and assume . Then, .   Put , let > for the quotient map , and assume . We will show that has basis .  is linearly independent. Assume there exist coefficients , such that . Let . It must be true that . Then, . However, and . The only satisfying these properties is so all must be 0, as required.  spans . is spanned by so is spanned by . Now, assume without loss of generality that is monic and . We have since . Consider . It follows It follows, by induction, . Therefore, every is a linear combination in the span of and    Consequently, is a basis of so , as required.     Alternative Definitions of Prior Adjunctions  We can now say that so . Furthermore, is minimal since is the smallest basis greater than and by the Tower Law, for , .  Additionally, . Of course, this is still not prove and we must show that .    Minimal Polynomial  Suppose is a field extension and let . The minimal polynomial for is the unique polynomial of minimum degree such that .    Properties of Minimal Polynomial  Let where . Define such that (since is a PID) where is monic. We will show that .  is unique. Assume . Then . Also, . Thus, , so must be a unit and . The only units of are the scalars. Since and are both monic, we must have , so .  . This is since as . Therefore, . However, and are both monic and has minimal degree. Therefore, .    We have shown that the minimal polynomial is unique and can be defined as the generator of .    Let be the minimal polynomial of for some . Define by . By the First Isomorphism Theorem, is an isomorphism and . Additionally, we have and is minimal among the fields containing and .    Let , , and . Then, .    Nonexistence of Minimal Polynomials  Note that minimal polynomials need not exist. For instance, has no minimal polynomial in by the work of Lindemann in 1882. Thus, no monic polynomial in vanishes at .    Algebraic and Transcendental  Given , , is algebraic ovr if there is a nonzero polynomial in vanishing at . Otherwise, is called transcendental .   "
},
{
  "id": "prop-characteristic-prime",
  "level": "2",
  "url": "4-1-26.html#prop-characteristic-prime",
  "type": "Proposition",
  "number": "2.1",
  "title": "Primality of Characteristic.",
  "body": " Primality of Characteristic  is either or prime for field .   Assume for some positive, composite . Let . It follows that . By the Fourth Isomorphism Theorem, there is a bijection between the ideals of containing and the ideals of . Since is composite by assumption, assume for integers and . It follows that and . However, this implies the existence of more than two ideals in , which contradicts the property that fields have only two ideals.  Thus, if is nonzero, then must be prime.   "
},
{
  "id": "ex-F3-adjoin-root-2",
  "level": "2",
  "url": "4-1-26.html#ex-F3-adjoin-root-2",
  "type": "Example",
  "number": "2.2",
  "title": "<span class=\"process-math\">\\(\\F_3(\\sqrt{2})\\)<\/span>.",
  "body": "  We want to define objects like without a larger \"ambient\" field like . Thus, define such that  .  contains such that .  is minimal.    Note that . , , and , so there is no element in whose square is .  The above properties suggest that where is the image of in .  "
},
{
  "id": "prop-irred-poly-quotient-field",
  "level": "2",
  "url": "4-1-26.html#prop-irred-poly-quotient-field",
  "type": "Proposition",
  "number": "2.3",
  "title": "Irreducibility of <span class=\"process-math\">\\(p(x)\\)<\/span> for Field <span class=\"process-math\">\\(F[x]\/(p(x))\\)<\/span>.",
  "body": " Irreducibility of for Field  For any field and any polynomial of positive degree, the ring is a field if and only if is irreducible.  "
},
{
  "id": "4-1-26-6",
  "level": "2",
  "url": "4-1-26.html#4-1-26-6",
  "type": "Remark",
  "number": "2.4",
  "title": "",
  "body": " is irreducible. Assume is reducible so . However, there is no such that or .  "
},
{
  "id": "prop-deg-poly-quotient-field",
  "level": "2",
  "url": "4-1-26.html#prop-deg-poly-quotient-field",
  "type": "Proposition",
  "number": "2.5",
  "title": "Degree of <span class=\"process-math\">\\(F[x]\/(p(x))\\)<\/span>.",
  "body": " Degree of  Let be a field and assume . Then, .   Put , let > for the quotient map , and assume . We will show that has basis .  is linearly independent. Assume there exist coefficients , such that . Let . It must be true that . Then, . However, and . The only satisfying these properties is so all must be 0, as required.  spans . is spanned by so is spanned by . Now, assume without loss of generality that is monic and . We have since . Consider . It follows It follows, by induction, . Therefore, every is a linear combination in the span of and    Consequently, is a basis of so , as required.   "
},
{
  "id": "ex-adjunction-alternative-defs",
  "level": "2",
  "url": "4-1-26.html#ex-adjunction-alternative-defs",
  "type": "Example",
  "number": "2.6",
  "title": "Alternative Definitions of Prior Adjunctions<span class=\"process-math\">\\(\\F_3(\\sqrt{2})\\)<\/span>.",
  "body": " Alternative Definitions of Prior Adjunctions  We can now say that so . Furthermore, is minimal since is the smallest basis greater than and by the Tower Law, for , .  Additionally, . Of course, this is still not prove and we must show that .  "
},
{
  "id": "def-minimal-polynomial",
  "level": "2",
  "url": "4-1-26.html#def-minimal-polynomial",
  "type": "Definition",
  "number": "2.7",
  "title": "Minimal Polynomial.",
  "body": " Minimal Polynomial  Suppose is a field extension and let . The minimal polynomial for is the unique polynomial of minimum degree such that .  "
},
{
  "id": "prop-minimal-polynomial-properties",
  "level": "2",
  "url": "4-1-26.html#prop-minimal-polynomial-properties",
  "type": "Proposition",
  "number": "2.8",
  "title": "Properties of Minimal Polynomial.",
  "body": " Properties of Minimal Polynomial  Let where . Define such that (since is a PID) where is monic. We will show that .  is unique. Assume . Then . Also, . Thus, , so must be a unit and . The only units of are the scalars. Since and are both monic, we must have , so .  . This is since as . Therefore, . However, and are both monic and has minimal degree. Therefore, .    We have shown that the minimal polynomial is unique and can be defined as the generator of .  "
},
{
  "id": "4-1-26-11",
  "level": "2",
  "url": "4-1-26.html#4-1-26-11",
  "type": "Corollary",
  "number": "2.9",
  "title": "",
  "body": " Let be the minimal polynomial of for some . Define by . By the First Isomorphism Theorem, is an isomorphism and . Additionally, we have and is minimal among the fields containing and .  "
},
{
  "id": "4-1-26-12",
  "level": "2",
  "url": "4-1-26.html#4-1-26-12",
  "type": "Example",
  "number": "2.10",
  "title": "",
  "body": " Let , , and . Then, .  "
},
{
  "id": "rmk-minimal-poly-nonexistence",
  "level": "2",
  "url": "4-1-26.html#rmk-minimal-poly-nonexistence",
  "type": "Remark",
  "number": "2.11",
  "title": "Nonexistence of Minimal Polynomials.",
  "body": " Nonexistence of Minimal Polynomials  Note that minimal polynomials need not exist. For instance, has no minimal polynomial in by the work of Lindemann in 1882. Thus, no monic polynomial in vanishes at .  "
},
{
  "id": "def-algebraic-transcendental",
  "level": "2",
  "url": "4-1-26.html#def-algebraic-transcendental",
  "type": "Definition",
  "number": "2.12",
  "title": "Algebraic and Transcendental.",
  "body": " Algebraic and Transcendental  Given , , is algebraic ovr if there is a nonzero polynomial in vanishing at . Otherwise, is called transcendental .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
