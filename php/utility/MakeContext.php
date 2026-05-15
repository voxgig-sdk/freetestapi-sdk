<?php
declare(strict_types=1);

// Freetestapi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FreetestapiMakeContext
{
    public static function call(array $ctxmap, ?FreetestapiContext $basectx): FreetestapiContext
    {
        return new FreetestapiContext($ctxmap, $basectx);
    }
}
